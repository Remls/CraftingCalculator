const KEYS = ['five', 'four', 'three', 'two', 'one']

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
            isDisabled: this.$persist({
                five: false,
                four: false,
                three: false,
                two: false,
                one: false,
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
                inp = this.validate(inp)
                let power = 0
                let sum = 0
                KEYS.slice().reverse().forEach(key => {
                    if (this.isDisabled[key]) return
                    sum += inp[key] * Math.pow(3, power)
                    power++
                })
                return sum
            },
            validate(inp) {
                KEYS.forEach(key => {
                    if (!inp[key]) {
                        inp[key] = 0
                    }
                    if (inp[key] <= 0) {
                        inp[key] = 0
                    }
                })
                return inp
            },
            clearValueIfZero($e) {
                if ($e.target.value == 0) {
                    $e.target.value = ''
                }
            },
            loadPreset(five, four, three, two, one) {
                this.isDisabled = {
                    five: five == 0,
                    four: four == 0,
                    three: three == 0,
                    two: two == 0,
                    one: one == 0,
                }
                this.need = { five, four, three, two, one }
                KEYS.forEach(key => {
                    if (this.isDisabled[key]) {
                        this.have[key] = 0
                    }
                })
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
                this.isDisabled = {
                    five: false,
                    four: false,
                    three: false,
                    two: false,
                    one: false,
                }
            }
        }
    })
})
