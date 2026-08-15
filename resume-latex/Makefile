TEX := resume.tex
OUT := output
PDF := $(OUT)/Manendra_Pal_Singh_Resume.pdf

.PHONY: all clean

all: $(PDF)

$(PDF): $(TEX) config/contact.tex sections/summary.tex sections/skills.tex sections/experience.tex sections/open_source.tex sections/education.tex
	@mkdir -p $(OUT)
	@command -v tectonic >/dev/null 2>&1 || { echo "Install Tectonic: https://tectonic-typesetting.github.io/"; exit 1; }
	tectonic --keep-logs --outdir $(OUT) $(TEX)
	@mv $(OUT)/resume.pdf $(PDF)

clean:
	@find $(OUT) -type f ! -name '.gitkeep' -delete 2>/dev/null || true

