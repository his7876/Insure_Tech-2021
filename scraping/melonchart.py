from selenium import webdriver

driver = webdriver.Chrome('./chromedriver')
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩
driver.get('https://www.melon.com/chart/index.htm')

table = driver.find_element_by_xpath('//*[@id="frm"]/div/table/tbody')
rows = table.find_elements_by_tag_name('tr')
# 차트 한줄씩 가져오기

for index, row in enumerate(rows):
    songTitle = row.find_elements_by_tag_name('td')[3]
    print(songTitle.text)

driver.quit()
