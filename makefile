all: pdf doc

pdf: tcc.md
	pandoc tcc.md -o build/tcc.pdf --latex-engine=xelatex

doc: tcc.md
	pandoc tcc.md -o build/tcc.doc
