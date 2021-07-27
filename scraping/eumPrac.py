from selenium import webdriver
from selenium.webdriver.support.ui import Select

driver = webdriver.Chrome('./chromedriver')
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩
driver.get('https://www.eum.go.kr/web/am/amMain.jsp')


#addressInput = driver.find_element_by_xpath('//*[@id="recent"]/input')
#addressInput.send_keys('서울특별시 광진구 자양동 능동로 120')
#
#nextButton = driver.find_element_by_xpath('//*[@id="frm"]/fieldset/div[3]/p/span/a')
#nextButton.click()



#실습 2 지번으로 조회하는 기능 만들기 
# 전라남도/ 고흥군 / 고흥읍 / 남계리 / 45/ 1
#조회후 공시지가 가지고 오기 
sidoSelect = Select(driver.find_element_by_xpath('//*[@id="selSido"]'))


gun = Select(driver.find_element_by_xpath('//*[@id="selSgg"]'))

dong = Select(driver.find_element_by_xpath('//*[@id="selUmd"]'))

ri = Select(driver.find_element_by_xpath('//*[@id="selRi"]'))

bobn = driver.find_element_by_xpath('//*[@id="bobn"]')

bubn = driver.find_element_by_xpath('//*[@id="selUmd"]')

nextButton = driver.find_element_by_xpath('//*[@id="frm"]/fieldset/div[3]/p/span/a')


sidoSelect.select_by_visible_text('전라남도')
driver.implicitly_wait(1)

gun.select_by_visible_text('고흥군')
driver.implicitly_wait(1)

dong.select_by_visible_text('고흥읍')
driver.implicitly_wait(1)

ri.select_by_visible_text('남계리')
driver.implicitly_wait(1)

bobn.send_keys('45')
bubn.send_keys('1')
nextButton.click()

result = driver.find_element_by_xpath('//*[@id="appoint"]/div[2]/table/tbody/tr[3]/td')
print(result.text)