import { test, expect } from "@playwright/test";

test("Has logo exist", async ({ page }) => {
    const url = process.env.BASE_URL as string;
    await page.goto(url);
    // get image by alt text
    const logo = page.getByAltText("Playwright logo").first();

    await expect(logo).toBeVisible();
});

// Playwright enables.... 

test("Has heading exist", async ({ page }) => {
    const url = process.env.BASE_URL as string;
    await page.goto(url);

    //locate heading one by locator tag name
    const headingTitle = page.locator("h1");

    // login test results located element value
    console.log((await headingTitle.innerText()).valueOf());
    await expect(headingTitle).toBeVisible();
});


test("Have nav links", async ({ page }) => {
    const url = process.env.BASE_URL as string;
    await page.goto(url);

    // locate nav link Docs by role and text
    const docsLink = page.getByRole("link", { name: "Docs" })
    const ApiLink = page.getByRole("link", { name: "API" })

    await expect(docsLink).toBeVisible();
    await expect(ApiLink).toBeVisible();
});


// locate comunity link
test("Have community links", async ({ page }) => {
    const url = process.env.BASE_URL as string;
    await page.goto(url);

    // click the element
    const communityLink = page.getByRole("link", { name: "Community" })
    await communityLink.click();
    // expect the current page to have passed url
    expect(page).toHaveURL("https://playwright.dev/community/welcome")
});

//
test("Check if logos exist", async ({ page }) => {
    const url = process.env.BASE_URL as string;
    await page.goto(url);

    // locate logos list by locator class name syntax
    const logosList = page.locator("ul.logosList_zAAF")

    // expect the current page to have passed url
    await expect(logosList).toBeVisible();
});