"""Command-line interface for grants_builder."""

import sys
from pathlib import Path

from .builder import build_all_grants


def build():
    """Build all grant viewers."""
    try:
        build_all_grants()
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)


def validate():
    """Validate grant structure and responses."""
    # TODO: Implement validation
    print("Validation not yet implemented")
    sys.exit(0)


if __name__ == "__main__":
    build()
