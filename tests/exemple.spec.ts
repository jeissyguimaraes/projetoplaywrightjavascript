import { test, expect } from "@playwright/test";

test ('Validar texto tela inicial do Moodle',async ({ page }) => {
    
    await page.goto('http://moodle-teste.base2.com.br/moodle/')
    const pageTitle =await page.locator('h1')
    await expect(pageTitle).toContainText('Moodle Teste')
})