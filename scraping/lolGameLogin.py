from selenium import webdriver


driver = webdriver.Chrome('./chromedriver')
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩
driver.get('https://na.leagueoflegends.com/ko-kr/')

loginButton = driver.find_element_by_xpath(
  '//*[@id="riotbar-right-content"]/div[3]/div[1]/a')
loginButton.click()

idInput = driver.find_element_by_css_selector(
'body > div > div > div > div.grid.grid-direction__row.grid-page-web__content > div > div > div.grid.grid-align-center.grid-justify-space-between.grid-fill.grid-direction__column.grid-panel-web__content.grid-panel__content > div > div > div > div:nth-child(1) > div > input')
idInput.send_keys('test')

passwordInput = driver.find_element_by_css_selector(
'body > div > div > div > div.grid.grid-direction__row.grid-page-web__content > div > div > div.grid.grid-align-center.grid-justify-space-between.grid-fill.grid-direction__column.grid-panel-web__content.grid-panel__content > div > div > div > div.field.password-field.field--animate > div > input')

passwordInput.send_keys('test')

loginClickButton = driver.find_element_by_css_selector('body > div > div > div > div.grid.grid-direction__row.grid-page-web__content > div > div > button')
loginClickButton.click()