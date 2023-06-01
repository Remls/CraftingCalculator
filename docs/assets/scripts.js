const KEYS = ['five', 'four', 'three', 'two', 'one']

const createEmptyPresets = (type) => {
    const returnObj = {}
    for (let drop in presets[type].drops) {
        const dropObj = {}
        KEYS.forEach(key => {
            dropObj[key] = 0
        })
        presets[type].disabledKeys[drop].forEach(key => {
            dropObj[key] = null
        })
        returnObj[drop] = dropObj
    }
    return returnObj
}
const craftableToStr = (craftable) => {
    let str = []
    KEYS.forEach(key => {
        if (craftable[key] !== null) {
            str.push(craftable[key])
        } else {
            str.push('-')
        }
    })
    return str.join('/')
}

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

            presets,
            presetOptions: {},

            init() {
                this.updateCalculations()
                for (let type in this.presets) {
                    this.presetOptions[type] = {
                        from: this.presets[type].min,
                        to: this.presets[type].max,
                        error: false,
                        drops: createEmptyPresets(type),
                    }
                    this.updatePreset(type)
                }
            },

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
            updatePreset(type) {
                const from = parseInt(this.presetOptions[type].from)
                const to = parseInt(this.presetOptions[type].to)
                this.presetOptions[type].error = false
                if (from > to) {
                    this.presetOptions[type].error = true
                    return
                }
                for (let drop in this.presets[type].drops) {
                    const preset = { five: 0, four: 0, three: 0, two: 0, one: 0 }
                    for (let i = from; i < to; i++) {
                        preset.five += this.presets[type].drops[drop][i].five
                        preset.four += this.presets[type].drops[drop][i].four
                        preset.three += this.presets[type].drops[drop][i].three
                        preset.two += this.presets[type].drops[drop][i].two
                        preset.one += this.presets[type].drops[drop][i].one
                    }
                    this.presets[type].disabledKeys[drop].forEach(key => {
                        preset[key] = null
                    })
                    this.presetOptions[type].drops[drop] = preset
                }
            },
            loadPresetFromSelection(type, drop) {
                const selection = this.presetOptions[type].drops[drop]
                this.isDisabled = {
                    five: selection.five === null,
                    four: selection.four === null,
                    three: selection.three === null,
                    two: selection.two === null,
                    one: selection.one === null,
                }
                this.need = this.validate({...selection})
                KEYS.forEach(key => {
                    if (this.isDisabled[key]) {
                        this.have[key] = 0
                    }
                })
                this.updateCalculations()
            },
            loadPreset(five, four, three, two, one) {
                this.isDisabled = {
                    five: five === null,
                    four: four === null,
                    three: three === null,
                    two: two === null,
                    one: one === null,
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
