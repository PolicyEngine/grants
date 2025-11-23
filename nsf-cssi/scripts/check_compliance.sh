#!/bin/bash
set -e

# Get the absolute path to the script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$( dirname "$SCRIPT_DIR" )"
TOOLS_DIR="$PROJECT_ROOT/tools"
VENV_PYTHON="$PROJECT_ROOT/.venv/bin/python3"

# Add tools directory to PYTHONPATH
export PYTHONPATH="$TOOLS_DIR:$PYTHONPATH"

# Run the validator
echo "Running NSF Grant Assembler command..."
"$VENV_PYTHON" -m nsf_grant_assembler.cli --project-root "$PROJECT_ROOT" "$@"
