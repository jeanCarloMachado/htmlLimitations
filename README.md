#biblatex-abnt

biblatex-abnt implements a citation and bibliography style following ABNT NBR 6023 for the [biblatex] package. It's thought to be a companion to [abntex2].

biblatex-abnt is a work in progress.

##Installation

Just put all `*.lbx`, `*.cbx` and `*.bbx` in the proper directories and rehash your tree (`texhash` if you use `texlive`).

##Usage

    \usepackage[style=abnt,backend=biber]{biblatex}
    \addbibresource{example.bib}

and

    \printbibliography

should be all you need.

##License

This work may be copied, distributed and/or modified under the conditions of the LaTeX Project Public License, version 1.3 (http://www.latex-project.org/lppl.txt), This software is provided "as is," without warranty of any kind, either expressed or implied, including, but not limited to, the implied warranties of merchantability and fitness for a particular purpose.

[abntex2]: https://code.google.com/p/abntex2/
[biblatex]: http://www.ctan.org/pkg/biblatex
