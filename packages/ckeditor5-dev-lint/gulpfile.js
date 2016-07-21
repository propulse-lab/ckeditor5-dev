/* jshint browser: false, node: true, strict: true */

'use strict';

const gulp = require( 'gulp' );
const ckeditor5Lint = require( './lib/lint' )( {
	ROOT_DIR: '.',

	// Files ignored by jshint and jscs tasks. Files from .gitignore will be added automatically during tasks execution.
	IGNORED_FILES: []
} );

gulp.task( 'lint', ckeditor5Lint.lint );
gulp.task( 'lint-staged', ckeditor5Lint.lintStaged );
gulp.task( 'pre-commit', [ 'lint-staged' ] );
