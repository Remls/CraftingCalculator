document.addEventListener('alpine:init', () => {
    Alpine.data('craftData', function () {
        return {
            have: this.$persist({
                five: 0,
                four: 0,
                three: 0,
                two: 0,
                one: 0,
            }),
            need: this.$persist({
                five: 0,
                four: 0,
                three: 0,
                two: 0,
                one: 0,
            }),
            haveSimplified: 0,
            needSimplified: 0,
            diffSimplified: 0,
            percent: 0,
            percentText: '0.00%',

            updateCalculations($e) {
                if ($e && $e.target.value == '') {
                    $e.target.value = 0
                }
                this.haveSimplified = this.simplify(this.have)
                this.needSimplified = this.simplify(this.need)
                if (this.needSimplified == 0) {
                    this.diffSimplified = 0
                    this.percent = 0
                    this.percentText = '0.00%'
                    return
                } else {
                    this.diffSimplified = this.needSimplified - this.haveSimplified
                    if (this.diffSimplified < 0) {
                        this.diffSimplified = 0
                    }
                    this.percent = (this.haveSimplified / this.needSimplified) * 100
                    this.percentText = this.percent.toFixed(2) + '%'
                }
            },
            simplify(inp) {
                this.validate(inp)
                let five = inp.five ?? 0
                let four = inp.four ?? 0
                let three = inp.three ?? 0
                let two = inp.two ?? 0
                let one = inp.one ?? 0
                return (five * 81) + (four * 27) + (three * 9) + (two * 3) + (one * 1)
            },
            validate(inp) {
                for (let key in inp) {
                    if (!inp[key]) {
                        inp[key] = 0
                    }
                    if (inp[key] <= 0) {
                        inp[key] = 0
                    }
                }
            },
            clearValueIfZero($e) {
                if ($e.target.value == 0) {
                    $e.target.value = ''
                }
            },
            loadPreset(five, four, three, two, one) {
                this.need = { five, four, three, two, one }
                this.updateCalculations()
            },
            reset(type) {
                this[type] = {
                    five: 0,
                    four: 0,
                    three: 0,
                    two: 0,
                    one: 0,
                }
                this.updateCalculations()
            },
            fullReset() {
                localStorage.clear()
                this.reset('have')
                this.reset('need')
            }
        }
    })
})
