from selenium import webdriver

driver = webdriver.Chrome()

driver.get("https://samrapley.me/")

input("Press Enter to close the browser...")
driver.quit()
