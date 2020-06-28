module.exports = {
  // Environments (構成情報)
  // ==============================

  // ESLintを処理するプロセッサの指定
  // https://eslint.org/docs/user-guide/configuring#specifying-processor
  parser: '@typescript-eslint/parser',

  // ECMAScriptのバージョンやJSXなどのパーサのオプションを指定
  // https://eslint.org/docs/user-guide/configuring#specifying-parser-options
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },

  // Globals (eslintが実行中にアクセス可能にするグローバル変数)
  // ==============================

  // 環境に依存するグローバル変数を定義
  // https://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    // ブラウザのグローバル変数
    browser: true,
    es2020: true
  },

  // 個別のグローバル変数
  // https://eslint.org/docs/user-guide/configuring#specifying-environments
  globals: {},

  // Rules (ESLintのルールの設定)
  // ==============================

  // サードパーティのプラグインによって定義されたルールや環境、または構成を使用する場合に指定
  // https://eslint.org/docs/user-guide/configuring#configuring-plugins
  plugins: [
    'react',
    'standard',
    '@typescript-eslint',
  ],

  // サードパーティやESLintが推奨するベースのルールを設定
  // https://eslint.org/docs/user-guide/configuring#using-eslint-recommended
  // https://eslint.org/docs/user-guide/configuring#using-eslint-recommended
  extends: [
    // ESLintの推奨する一連のルール
    // 'eslint:recommended',
    // reactの推奨ルール
    'plugin:react/recommended',
    // eslint-config-standardルール
    'standard',
    // typescript-eslintで対応できるeslintの推奨する一連のルール
    // 'plugin:@typescript-eslint/eslint-recommended',
    // typescrip-eslinttの推奨する一連のルール
    'plugin:@typescript-eslint/recommended'
  ],

  // 個別で定義するルール
  // https://eslint.org/docs/user-guide/configuring#using-the-configuration-from-a-plugin
  // https://eslint.org/docs/rules/
  rules: {
    "react/prop-types": "off"
  },

  // 特定のファイルグループで設定するルール
  // https://eslint.org/docs/user-guide/configuring#disabling-rules-only-for-a-group-of-files
  // overrides: {},

  // 各ルールが実行させる時の補助共有設定
  // https://eslint.org/docs/user-guide/configuring#adding-shared-settings
  settings: {
    react: {
      version: '16.3'
    }
  },

  // ESLintを適応しないファイルやディレクトリを指定 (v6.7.0以上)
  // https://eslint.org/docs/user-guide/configuring#ignorepatterns-in-config-files
  ignorePatterns: ['node_modules/']
}
