.PHONY: install build test format clean

install:
	uv pip install -e ".[dev]"

build:
	uv run python -m grants_builder.cli

test:
	uv run pytest tests/ -v

format:
	uv run black grants_builder/ tests/

clean:
	rm -rf build/ dist/ *.egg-info
	rm -rf docs/grants_data.js docs/exports/
	find . -type d -name __pycache__ -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete
