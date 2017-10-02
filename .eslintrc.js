module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
        ,
        "no-console" : "error",
        "no-magic-numbers" : "error",
        "no-multi-spaces" : "error",
        "max-len" : ["error", 80],
        "no-trailing-spaces" : "error",
        "constructor-super" : "error",
        "comma-style": ["error", "last"],
    }
};