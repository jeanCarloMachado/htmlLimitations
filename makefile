all: pdf doc

pdf:
	cd build ; latex ../tcc.tex ; dvipdfm tcc.dvi

clean:
	rm -rf build/*
