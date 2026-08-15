.PHONY: all resume clean

all: resume

resume:
	$(MAKE) -C resume-latex

clean:
	$(MAKE) -C resume-latex clean

