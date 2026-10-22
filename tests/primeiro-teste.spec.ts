import { test, expect } from '@playwright/test';

test('Abrir a loja', async ({ page }) => {
    await page.goto('https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/loja.html');

    const titulo = page.getByRole('heading', { name: 'Seu próximo setup começa aqui.' });

    await expect(titulo).toBeVisible();
});