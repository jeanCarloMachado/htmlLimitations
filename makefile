all: pdf doc

pdf:
	latex tcc.tex
	bibtex tcc
	latex tcc.tex
	latex tcc.tex
	dvipdfm tcc.dvi
	zathura tcc.pdf

clean:
	rm -rf build/*
