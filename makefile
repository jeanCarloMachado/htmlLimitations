all: pdf doc

pdf:
	cd build ; latex ../tcc.tex ; dvipdfm tcc.dvi ; zathura tcc.pdf

clean:
	rm -rf build/*
