require 'selenium-webdriver'

# TODO: Use a real testing library

driver = Selenium::WebDriver.for(:firefox)
driver.navigate.to('http://localhost:4000/documentation/tutorial/web_bundle/qunit.html?0')
wait = Selenium::WebDriver::Wait.new(timeout: 10)
wait.until { driver.find_element(css: '#qunit-testresult .failed') }

puts driver.find_element(css: 'body').text

fail_count = driver.find_element(css: '#qunit-testresult .failed').text
driver.quit # Is this necessary?
if fail_count == '0'
  puts 'PASS'
else
  warn 'FAIL'
  exit 1
end