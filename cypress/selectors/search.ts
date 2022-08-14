export const selectors = {
    "logoBrand": (name: string) => `[class=c-index-logo][href='/experience/${name}/']`,
    "textBrand": (name: string) => `[class*=c-index-makes__item][href='/experience/${name}/']`,
    "searchBtn": "[data-ym-target=root_screen_search]",
    "searchField": "[data-role=search-tips]",
    "searchResults": "[data-ym-target=sitesearch-results-click]",
}