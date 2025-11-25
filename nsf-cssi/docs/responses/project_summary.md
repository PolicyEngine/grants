# Project Summary

## Overview

NBER's TAXSIM has been foundational cyberinfrastructure for public economics research—over 1,000 academic citations across three decades. But TAXSIM has limitations that constrain the next generation of research: it covers only income taxes (excluding benefit programs like SNAP and Medicaid that interact with the tax system), it is closed-source (researchers cannot inspect or extend the code), it models only current law (not policy reforms), and it lacks integrated microsimulation on calibrated microdata.

PolicyEngine is open-source infrastructure that addresses each of these gaps. We encode federal and state income taxes *plus* major benefit programs, enabling researchers to study the full tax-benefit system. Users can model any hypothetical reform, not just current law. Everything runs on calibrated microdata via modern Python APIs, and every calculation traces to 1,800+ citations to statute. We are validated against TAXSIM itself (MOU with NBER; Dan Feenberg serves as advisor) and the Atlanta Fed Policy Rules Database. Current users include the Joint Economic Committee and UK Treasury.

This project will modernize PolicyEngine's core infrastructure to unlock population-scale research. We will build **continuous validation infrastructure** that automatically compares every release against TAXSIM and Atlanta Fed benchmarks, ensuring accuracy as tax law changes annually. We will deliver **performance improvements** enabling microsimulation across 100+ million tax units for distributional research and policy optimization. And we will create **R and Stata interfaces** to meet economists in their preferred environments.

The research opportunity is substantial: imagine revisiting decades of tax incidence and labor supply studies while incorporating SNAP phase-outs, Medicaid eligibility cliffs, and EITC interactions. PolicyEngine enables this research—but core infrastructure modernization is required to support it at scale.

## Intellectual Merit

This project creates the open-source successor to TAXSIM as foundational cyberinfrastructure for public economics. The technical innovations—continuous cross-model validation infrastructure and population-scale microsimulation—address gaps in existing tools. The work establishes reproducible benchmarks comparing PolicyEngine against TAXSIM, creating community resources for method validation. Most significantly, the infrastructure enables research questions currently infeasible: how do SNAP benefit reductions interact with EITC phase-outs to affect labor supply? What is the joint distributional impact of federal tax changes and state benefit policies? These questions require modeling taxes and benefits together at population scale.

## Broader Impacts

Open tax-benefit infrastructure democratizes policy analysis capabilities currently restricted to well-funded institutions. Graduate students can conduct dissertation research without proprietary software licenses. State legislators can independently model policy alternatives rather than waiting weeks for external analysis. The platform already enables benefit navigation tools that have identified over $800 million in unclaimed benefits for low-income families. Commercial applications in tax preparation and financial planning provide sustainability pathways ensuring long-term infrastructure maintenance. The goal is for PolicyEngine to become as foundational for the next generation of public economics research as TAXSIM has been for the last.

## Keywords

Tax-benefit microsimulation; TAXSIM; open-source infrastructure; policy analysis; computational economics; reproducible research; rules as code
