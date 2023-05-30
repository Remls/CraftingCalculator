document.addEventListener('alpine:init', () => {
    Alpine.data('craftData', function () {
        return {
            have: this.$persist({
                five: 0,
                four: 0,
                three: 0,
                two: 0,
            }),
            need: this.$persist({
                five: 0,
                four: 0,
                three: 0,
                two: 0,
            }),
            haveSimplified: 0,
            needSimplified: 0,
            percent: 0,
            percentText: '0%',

            updateCalculations() {
                this.haveSimplified = this.simplify(this.have)
                this.needSimplified = this.simplify(this.need)
                if (this.needSimplified == 0) {
                    this.percent = 0
                    this.percentText = '0.00%'
                    return
                } else {
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
                return (five * 27) + (four * 9) + (three * 3) + (two * 1)
            },
            validate(inp) {
                for (let key in inp) {
                    if (inp[key] < 0) {
                        inp[key] = 0
                    }
                }
            },
            reset(type) {
                this[type] = {
                    five: 0,
                    four: 0,
                    three: 0,
                    two: 0,
                }
                this.updateCalculations()
            }
        }
    })
})