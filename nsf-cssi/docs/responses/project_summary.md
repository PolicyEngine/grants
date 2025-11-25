# Project Summary

## Overview

PolicyEngine is the most comprehensive open-source tax-benefit microsimulation model in the United States, encoding over 9,000 policy parameters across federal taxes, all 50 state tax systems, and major benefit programs including SNAP, Medicaid, TANF, and housing assistance. The platform serves over 100,000 individuals annually through direct use and partner applications, supports policy analysis at the Joint Economic Committee, and has been adopted by the UK Cabinet Office for government policy modeling. Despite this demonstrated impact, PolicyEngine's core simulation engine—built on OpenFisca architecture from 2011—faces fundamental limitations that prevent critical research applications.

This project will modernize PolicyEngine's core infrastructure to address three technical challenges. First, we will implement **native scenario branching** to handle tax provisions requiring calculation under multiple alternatives (e.g., choosing between credits and deductions, computing Social Security trust fund contributions with and without benefit income). Second, we will build **continuous validation infrastructure** that automatically compares every release against NBER's TAXSIM and the Atlanta Fed Policy Rules Database, ensuring accuracy and identifying regressions. Third, we will deliver **performance improvements** enabling population-scale microsimulation across 100+ million tax units.

The project builds on PolicyEngine's active NSF POSE Phase I award and leverages existing partnerships with NBER (formal MOU, with TAXSIM creator Dan Feenberg serving as technical advisor) and the Atlanta Fed. All code will remain open-source under MIT/AGPL licenses, with comprehensive documentation enabling adoption by researchers, government agencies, and commercial applications.

## Intellectual Merit

This project advances cyberinfrastructure for computational economics by creating production-quality open-source alternatives to proprietary microsimulation tools. The technical innovations—particularly native branching for multi-scenario tax calculations and continuous cross-model validation—address gaps in existing open-source frameworks. The work will establish reproducible benchmarks comparing PolicyEngine against TAXSIM and other models, creating community resources for method validation. The architectural improvements will enable research questions currently infeasible with existing tools, including real-time policy optimization and large-scale behavioral microsimulation.

## Broader Impacts

Open tax-benefit infrastructure democratizes policy analysis capabilities currently restricted to well-funded institutions. Graduate students can conduct dissertation research without proprietary software licenses. State legislators can independently model policy alternatives rather than waiting weeks for external analysis. International researchers can study American tax policy without institutional barriers. The platform already enables benefit navigation tools that have identified over $800 million in unclaimed benefits for low-income families. Commercial applications in tax preparation and financial planning provide sustainability pathways ensuring long-term infrastructure maintenance without ongoing grant dependence.

## Keywords

Tax-benefit microsimulation; open-source infrastructure; policy analysis; computational economics; TAXSIM; reproducible research; rules as code
