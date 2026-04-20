# 🔐 Security Policy

<p align="center">
  <img src="https://img.shields.io/badge/Security-Active-success?style=for-the-badge&logo=shield&logoColor=white">
  <img src="https://img.shields.io/badge/Updates-Regular-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/Response-24--72%20hrs-orange?style=for-the-badge">
</p>

---

## 🛡️ Supported Versions

We actively maintain and provide security updates for the following versions:

| Version | Supported |
| ------- | --------- |
| 5.1.x   | ✅ Yes     |
| 5.0.x   | ❌ No      |
| 4.0.x   | ✅ Yes     |
| < 4.0   | ❌ No      |

---

## 📊 Security Response Flow

```mermaid id="secflow1"
flowchart TD
    A[Report Submitted] --> B[Initial Review]
    B --> C{Valid Vulnerability?}
    C -- Yes --> D[Fix Development]
    D --> E[Testing & Validation]
    E --> F[Patch Released]
    F --> G[Public Disclosure]
    C -- No --> H[Report Closed]
```

---

## 🚨 Reporting a Vulnerability

If you discover a security issue, please report it responsibly.

### 📩 How to Report

* 📧 Email: **[security@yourdomain.com](mailto:security@yourdomain.com)** *(replace with your real email)*
* 📝 Include:

  * Clear description of the issue
  * Steps to reproduce
  * Screenshots / proof of concept (if possible)
  * Impact explanation

---

## ⏱️ Response Timeline

```mermaid id="sectime1"
gantt
    title Vulnerability Handling Timeline
    dateFormat  YYYY-MM-DD
    section Process
    Acknowledgement       :a1, 2026-01-01, 2d
    Investigation         :a2, after a1, 3d
    Fix Development       :a3, after a2, 5d
    Patch Release         :a4, after a3, 2d
```

* ✅ **Acknowledgement:** within **24–72 hours**
* 🔍 **Investigation:** within **3–5 days**
* 🛠️ **Fix Release:** depends on severity (usually within a week)

---

## 🔎 What to Expect

### ✔️ If Accepted:

* You’ll receive confirmation
* Issue will be fixed and tested
* Patch will be released
* Optional credit (if you want recognition)

### ❌ If Declined:

* Clear explanation will be provided
* Suggestions (if applicable)

---

## ⚠️ Security Best Practices

* Do **not** publicly disclose vulnerabilities before reporting
* Avoid exploiting issues beyond proof-of-concept
* Keep reports **ethical and responsible**

---

## 🧠 Scope

This policy covers:

* Core application logic
* LocalStorage handling
* UI input validation
* Browser-based vulnerabilities

---

## 🤝 Responsible Disclosure

We believe in **safe, transparent, and ethical security practices**.
Your contribution helps make this project safer for everyone.

---

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?color=00C2FF&size=22&center=true&vCenter=true&width=500&lines=Security+Matters+🔐;Report+Responsibly+🚨;Build+Safe+Apps+💻"/>
</p>

---
