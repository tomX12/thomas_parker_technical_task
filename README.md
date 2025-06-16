# Thomas Parker Technical Task - Holiday Entitlement Calculator - Playwright BDD Test Suite
This repository contains an automated BDD (Behavior Driven Development) test suite using [Playwright](https://playwright.dev/) to validate the functionality of the UK Government's [Holiday Entitlement Calculator](https://www.gov.uk/calculate-your-holiday-entitlement).

## 🚀 Getting Started

### Prerequisites

- [Node.js v22 LTS](https://nodejs.org/en/download/) installed
1. **Clone the repository:**
   ```bash
   git clone https://github.com/tomX12/thomas_parker_technical_task.git
   cd your-repo-name
   ```
   or if downloading ZIP of repo:
   ```bash
   Extract into folder of choice
   cd folder-of-choice

3. **Install Dependencies**
   ```bash
   npm install

4. **Install Playwright Browsers**
   ```bash
   npx playwright install

## ✅ Running Tests

### Run Tests in Headless Mode
```bash
npm run test
```

### Run Tests using Playwright UI
```bash
npm run test-ui
```

### View Previous Run Report
```bash
npm run report
```
## Thoughts on further improvements 
- More robust CI pipeline with better outputting of results
- More informative reporter such as Allure, especially as BDD is being used


## Accessibility Task
### Defects found on test page
| **Defect**                                          | **WCAG 2.2 Guideline**                                     | **Level** |
|-----------------------------------------------------|----------------------------------------------------------- |-----------|
| The page title is missing                           | 2.4.2 Page Titled                                          | A         |
| Language of the document is not identified          | 3.1.1 Language of Page                                     | A         |
| No page regions or ARIA landmarks                   | 1.3.1 Info and Relationships, 2.4.1 Bypass Blocks          | A         |
| No first level heading                              | 1.3.1 Info and Relationships                               | A         |
| Full name input has no corresponding label          | 1.3.1 Info and Relationships, 3.3.2 Labels or Instructions | A         |
| Email input has no corresponding label              | 1.3.1 Info and Relationships, 3.3.2 Labels or Instructions | A         |
| Your message input has no corresponding label       | 1.3.1 Info and Relationships, 3.3.2 Labels or Instructions | A         |
| Image has missing alt text                          | 1.1.1 Non-text Content                                     | A         |
| Focus box not visible while tabbing                 | 2.4.7 Focus Visible                                        | AA        |

## Bug report

**Title**: Full name input box has no corresponding label

**Description**: The full name input box has no corresponding label attribute. This means users who navigate the site using the keyboard will not receive the necessary information from their screenreader when they focus on this element. This can cause confusion for the user as they will not know what they need to input into the box. 

**Steps to reproduce**: 
1. spin up the environment following the steps in the repo
2. Navigate to the page via any browser
3. Right-click on the **Full Name** input box and click inspect
4. There will be no label attribute in the Full Name element

**Expected Outcome**: Element should have correct label attribute 

**Actual Outcome**: Element has no label attribute

**How often is this defect observed**: Every visit to the page

**Priority**: To be triaged

**Date found**: 16/06/25

**Environment**: TEST

**Browser**: Google Chrome Version 137.0.7151.103 (Official Build) (64-bit)

**OS**: Linux Mint 22.1

**Attachments**:
![Screenshot from 2025-06-16 15-35-13](https://github.com/user-attachments/assets/f17ec826-2a2f-44d5-b4a0-108dae1958c1)

