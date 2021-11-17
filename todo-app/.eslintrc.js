module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2015,
        sourceType: 'module'
    },
    env : {
        browser: true,
        node: true
    },
    extends: [
        'standard',
        'plugin:vue/essential'
    ],
    plugins: [
        'vue'
    ],
    rules: {
        'no-new': 0,
        "indent": 0,
        "no-multi-spaces": 0,
        "no-multi-empty-lines": 0,
        "spaced-comment": 0
    }
}