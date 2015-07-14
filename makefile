all: pdf doc

pdf:
	pandoc --latex-engine=xelatex -H preamble.tex -V fontsize=12pt -V documentclass:book -V papersize:a4paper -V classoption:openright part/introducao.md part/justificativa.md part/revisao/games.md part/revisao/web.md part/revisao/android.md part/revisao/html.md part/revisao/css.md part/revisao/javascript.md part/revisao/revisao.md part/metodologia.md part/resultados.md part/conclusao.md part/anexos.md -o build/tcc.pdf

doc:
	pandoc --latex-engine=xelatex -H preamble.tex -V fontsize=12pt -V documentclass:book -V papersize:a4paper -V classoption:openright part/introducao.md part/justificativa.md part/revisao/games.md part/revisao/web.md part/revisao/android.md part/revisao/html.md part/revisao/css.md part/revisao/javascript.md part/revisao/revisao.md part/metodologia.md part/resultados.md part/conclusao.md part/anexos.md -o build/tcc.doc

