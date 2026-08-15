# Manendra Pal Singh - LaTeX Resume

Reusable, ATS-friendly LaTeX resume for Senior Software Developer and Senior Backend Engineer applications.

## Structure

- `resume.tex` - document layout and styling
- `config/contact.tex` - name, location, and contact links
- `sections/` - independently editable resume sections
- `output/` - generated PDF
- `Makefile` - repeatable build command

## Build

From the repository root, install [Tectonic](https://tectonic-typesetting.github.io/) and run:

```bash
make
```

You can also build from this directory:

```bash
cd resume-latex
make
```

The generated file is:

```text
resume-latex/output/Manendra_Pal_Singh_Resume.pdf
```

## Update the resume

1. Edit contact details in `config/contact.tex`.
2. Edit content in the appropriate file under `sections/`.
3. Run `make`.
4. Review both PDF pages before submitting an application.

Keep bullets concise and use the pattern: accomplished X, measured by Y, by doing Z.
