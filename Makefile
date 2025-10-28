.PHONY: install build test format clean

install:
	pip install -e ".[dev]"

build:
	python3 -m grants_builder.cli

test:
	pytest tests/ -v

format:
	black grants_builder/ tests/

clean:
	rm -rf build/ dist/ *.egg-info
	rm -rf docs/grants_data.js
	find . -type d -name __pycache__ -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete
