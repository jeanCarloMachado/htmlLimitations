all: pdf doc

pdf: tcc.md
	pandoc tcc.md -o build/tcc.pdf

doc: tcc.md
	pandoc tcc.md -o build/tcc.doc
