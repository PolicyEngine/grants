"""Tests for grants_builder."""

import pytest
from pathlib import Path
from grants_builder.utils import strip_markdown_formatting


def test_strip_markdown_headers():
    """Test markdown header removal."""
    text = "# Header\nContent"
    assert strip_markdown_formatting(text) == "Header\nContent"


def test_strip_markdown_bold():
    """Test bold text formatting removal."""
    text = "This is **bold** text"
    assert strip_markdown_formatting(text) == "This is bold text"


def test_strip_markdown_links():
    """Test link formatting removal."""
    text = "Check [this link](https://example.com)"
    assert strip_markdown_formatting(text) == "Check this link"


def test_strip_markdown_lists():
    """Test list marker removal."""
    text = "- Item 1\n- Item 2"
    assert strip_markdown_formatting(text) == "Item 1\nItem 2"


def test_character_counting():
    """Test that character counting works correctly."""
    text = "This is a **test** with [link](url.com) and # header"
    plain = strip_markdown_formatting(text)
    # Should remove markdown but count the actual text
    assert len(plain) < len(text)
    assert "**" not in plain
    assert "[" not in plain
