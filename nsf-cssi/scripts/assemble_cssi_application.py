#!/usr/bin/env python3
"""
Assemble CSSI Elements application from individual section files.
Adapted from the POSE application assembly script.
"""

import os
import yaml
from pathlib import Path

def load_config():
    """Load the CSSI application configuration."""
    config_path = Path(__file__).parent.parent / 'docs' / 'cssi' / 'cssi_questions.yaml'
    with open(config_path, 'r') as f:
        return yaml.safe_load(f)

def read_section_file(file_path):
    """Read a section markdown file."""
    full_path = Path(__file__).parent.parent / 'docs' / 'cssi' / file_path
    try:
        with open(full_path, 'r') as f:
            return f.read().strip()
    except FileNotFoundError:
        return f"*[{file_path} - TO BE DEVELOPED]*"

def count_words(text):
    """Count words in text, excluding markdown syntax."""
    # Simple word count - could be enhanced for better accuracy
    import re
    # Remove markdown headers, links, code blocks, etc.
    clean_text = re.sub(r'[#*`\[\]()_]', ' ', text)
    clean_text = re.sub(r'\s+', ' ', clean_text)
    words = clean_text.split()
    return len(words)

def assemble_application():
    """Assemble the complete CSSI application."""
    config = load_config()
    
    # Start building the assembled content
    content = []
    content.append(f"# {config['basic_info']['project_title']}")
    content.append("")
    content.append(f"**{config['basic_info']['program']}**")
    content.append(f"**{config['basic_info']['organization_name']}**")
    content.append("")
    content.append(f"*Funding Cap: {config['basic_info']['funding_cap']}*")
    content.append(f"*Duration: {config['basic_info']['duration']}*")
    content.append(f"*Deadline: {config['basic_info']['deadline']}*")
    content.append("")
    content.append("---")
    content.append("")
    
    total_words = 0
    
    # Process each section
    for section in config['sections']:
        print(f"Processing section: {section['title']}")
        
        # Add section header
        content.append(f"## {section['title']}")
        content.append("")
        
        # Read section content
        section_content = read_section_file(section['file'])
        content.append(section_content)
        content.append("")
        
        # Count words and add to total
        word_count = count_words(section_content)
        total_words += word_count
        
        print(f"  - {word_count} words")
        content.append(f"*[Word count: {word_count}]*")
        content.append("")
        content.append("---")
        content.append("")
    
    # Add summary information
    content.append("## Application Summary")
    content.append("")
    content.append(f"**Total Word Count:** {total_words}")
    content.append("")
    
    content.append("### Sections Completed")
    for section in config['sections']:
        status = "✓" if Path(__file__).parent.parent / 'docs' / 'cssi' / section['file'] else "○"
        content.append(f"- {status} {section['title']}")
    
    content.append("")
    content.append("### Required Attachments")
    for attachment in config['attachments']:
        status = "○"  # All pending for now
        content.append(f"- {status} {attachment['title']}")
    
    # Write assembled content
    output_path = Path(__file__).parent.parent / 'docs' / 'cssi' / 'assembled.md'
    with open(output_path, 'w') as f:
        f.write('\n'.join(content))
    
    print(f"\nAssembled application written to: {output_path}")
    print(f"Total word count: {total_words}")
    
    return total_words

if __name__ == "__main__":
    assemble_application()