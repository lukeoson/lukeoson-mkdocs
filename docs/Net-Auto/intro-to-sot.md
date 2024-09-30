---
title: The Network Sources of Truth
#template: custom_home.html 
icon: material/database-check-outline
hide:
  #- footer
  #- navigation
#level:
tags:
    - Pending
    - Database
    - Sources of Truth
---

## Coming Soon

!!! bug "This page is under construction." 
    Please check back later for updates.

    Today is {{ git.date }} and I can assure you i'll be pushing this page soon. 

    It it cover a little theory but mostly be a quick sampling of the awesome companies building in this space. 

    Namely... Netbox & Netbox Labs, Nautobot, and cool new kid InfraHub from Opsmill. 

---

## Introduction

In network management and infrastructure, maintaining accurate and up-to-date information is crucial. This is the concept of a **Source of Truth (SoT)**. An SoT serves as the authoritative repository for a particular network data context, ensuring consistency, reliability, and accessibility across tools and teams. It's a foundational construct to building automated networks that scale with integrity. You can't get much done without it so it's appropriate to prioritise the SoT component of your network architecture strategy. 

### What is a Network Source of Truth?

First and foremost... understand there is no such thing. A source of truth is a conceptual frame of reference and an evocative promised land at which you will never arrive. A prudent first step is to convey to your corporate overlords that this is so... it will save much future heart ache and professional anxiety - trust me!

There absolutely are, however, ***multiple*** sources of truth - each with their own unique context and value in your programmatic network of tools, systems and platforms. We will touch upon the nuance later but the easy gist is to mentally demarcate the difference between the **intended** and **actual** state of your network. This will save many squabbles and empower you to swat away all those cantankerous engineers that insist the only source of truth that matters is the current running state of the network as discovered by the CLI.

Given we are talking about data stores here, in one form or another, it's important to understand that a SoT is in essence a Database.

Some examples would be:

- SQL databases: MySQL, PostgreSQL, SQLite
- NoSQL databases: MongoDB, Cassandra, Redis
- Graph databases: Neo4j, Amazon Neptune
- Time series databases: InfluxDB, Prometheus
- Key-value stores: Redis, etcd
- Configuration files: YAML, JSON, XML

A **Network Source of Truth** is a centralized system that stores comprehensive information about a network's configuration, topology, devices, and related metadata. It acts as the single point of reference, eliminating discrepancies and fostering seamless collaboration among network administrators, engineers, and other stakeholders.

### The Role of Databases in NSoTs

At the core of an NSoT lies a robust database. This database meticulously records every aspect of the network, from device specifications and connections to configuration settings and operational metrics. By leveraging databases, NSoTs provide structured and queryable data, facilitating automation, reporting, and informed decision-making.

### Intent vs. Actuality

Understanding the **difference between intent and actuality** is fundamental in network management:

- **Intent:** Represents the desired state of the network as defined by administrators. It includes configurations, policies, and objectives that outline how the network should operate.

- **Actuality:** Reflects the current, real-world state of the network, including any deviations, anomalies, or changes that have occurred over time.

An effective NSoT bridges the gap between intent and actuality by continuously monitoring the network, detecting discrepancies, and enabling corrective actions to align the actual state with the intended design.

## Network Sources of Truth Products

Several tools and platforms facilitate the implementation and management of Network Sources of Truth. Below, we explore three prominent solutions: **NetBox**, **Nautobot**, and **InfoHub by Opsmill**.

### 1. NetBox

![NetBox Logo](https://example.com/netbox-logo.png)

**NetBox** is an open-source web application designed to manage and document computer networks. Originally developed by DigitalOcean, NetBox has evolved into a comprehensive tool for network automation and infrastructure management.

#### Key Features

- **IP Address Management (IPAM):** Track and organize IP addresses across multiple sites and VRFs.
- **Data Center Infrastructure Management (DCIM):** Manage racks, devices, connections, and power usage.
- **Custom Fields and Scripts:** Extend NetBox’s functionality to suit specific organizational needs.
- **REST API:** Integrate with other tools and automate workflows through a robust API.

#### Use Cases

- **Network Documentation:** Maintain an up-to-date inventory of network assets and configurations.
- **Automation:** Streamline provisioning and configuration management through API integrations.
- **Capacity Planning:** Analyze resource utilization to optimize infrastructure deployment.

#### Getting Started

To begin using NetBox, visit the [official documentation](https://netbox.readthedocs.io/) for installation guides, user manuals, and API references.

### 2. Nautobot

![Nautobot Logo](https://example.com/nautobot-logo.png)

**Nautobot** is an open-source Network Source of Truth and automation platform, a fork of NetBox, developed by the community and backed by several industry contributors. It builds upon NetBox’s foundation, introducing enhanced automation capabilities and extensibility.

#### Key Features

- **Plugin Architecture:** Easily extend Nautobot’s functionality with a wide range of plugins.
- **Job Engine:** Automate repetitive tasks and complex workflows with customizable jobs.
- **GraphQL API:** Advanced querying capabilities for more efficient data retrieval.
- **Webhooks:** Integrate with other systems and trigger actions based on specific events.

#### Use Cases

- **Advanced Automation:** Implement complex automation workflows to manage network changes and deployments.
- **Integration with CI/CD Pipelines:** Seamlessly integrate network management into continuous integration and deployment processes.
- **Enhanced Reporting:** Generate detailed reports and analytics to gain insights into network performance and usage.

#### Getting Started

Explore Nautobot’s capabilities by visiting the [Nautobot documentation](https://nautobot.readthedocs.io/) for comprehensive guides and resources.

### 3. InfoHub by Opsmill

![InfoHub by Opsmill Logo](https://example.com/infohub-logo.png)

**InfoHub by Opsmill** is a proprietary Network Source of Truth solution designed to provide enterprises with a unified platform for managing network data, fostering collaboration, and driving operational excellence.

#### Key Features

- **Centralized Data Repository:** Consolidate network information from various sources into a single, accessible platform.
- **Real-Time Monitoring:** Continuously monitor network states and configurations to ensure accuracy and compliance.
- **Collaboration Tools:** Facilitate teamwork through shared dashboards, annotations, and access controls.
- **Analytics and Insights:** Leverage built-in analytics to identify trends, optimize performance, and predict future needs.

#### Use Cases

- **Enterprise Network Management:** Manage large-scale, complex networks with ease and precision.
- **Compliance and Auditing:** Ensure network configurations adhere to industry standards and regulatory requirements.
- **Change Management:** Track and manage network changes to minimize disruptions and maintain stability.

#### Getting Started

For more information on InfoHub by Opsmill, visit the [Opsmill website](https://www.opsmill.com/infohub) or contact their sales team for a personalized demonstration.

## Conclusion

Establishing a robust Network Source of Truth is essential for modern network management. By centralizing data, automating workflows, and ensuring consistency between intent and actuality, organizations can achieve greater efficiency, reliability, and scalability in their network operations. Tools like NetBox, Nautobot, and InfoHub by Opsmill provide versatile solutions to meet diverse networking needs, empowering teams to maintain control and drive innovation.

---