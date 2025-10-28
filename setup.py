"""Setup file for grants_builder package."""

from setuptools import setup, find_packages

setup(
    name="policyengine-grants",
    version="0.1.0",
    packages=find_packages(),
    install_requires=["pyyaml>=6.0"],
    extras_require={"dev": ["pytest>=7.0", "black>=23.0"]},
    entry_points={
        "console_scripts": [
            "grants-build=grants_builder.cli:build",
            "grants-validate=grants_builder.cli:validate",
        ]
    },
)
