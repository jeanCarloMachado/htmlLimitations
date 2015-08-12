all: pdf doc


defaultParameters = --latex-engine=xelatex -H preamble.tex -V documentclass:book -V papersize:a4paper

pdf:
	pandoc $(defaultParameters)  part/introducao.md part/justificativa.md part/revisao/games.md part/revisao/web.md part/revisao/html.md part/revisao/css.md part/revisao/javascript.md part/revisao/revisao.md part/revisao/android.md part/revisao/navegadores.md part/metodologia.md part/resultados.md part/conclusao.md part/anexos.md -o build/tcc.pdf

doc:
	pandoc $(defaultParameters)  part/introducao.md part/justificativa.md part/revisao/games.md part/revisao/web.md part/revisao/html.md part/revisao/css.md part/revisao/javascript.md part/revisao/revisao.md part/revisao/android.md part/revisao/navegadores.md part/metodologia.md part/resultados.md part/conclusao.md part/anexos.md -o build/tcc.doc

clean:
	rm -rf build/*
