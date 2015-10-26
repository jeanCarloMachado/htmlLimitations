all: pdf

pdf:
	pdflatex tcc.tex
	bibtex tcc
	latex tcc.tex
	latex tcc.tex
	zathura tcc.pdf

clean:
	rm -rf tcc.bbl
	rm -rf tcc.blg
	rm -rf tcc.lof
	rm -rf tcc.log
	rm -rf tcc.lot
	rm -rf tcc.out
	rm -rf tcc.pdf
	rm -rf tcc.toc
	rm -rf te.bst
