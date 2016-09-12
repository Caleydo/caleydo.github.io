require 'selenium-webdriver'

# TODO: Use a real testing library?

driver = Selenium::WebDriver.for(:firefox)
driver.navigate.to('http://localhost:4000/documentation/tutorial/web_bundle/qunit.html?0')

begin
  wait = Selenium::WebDriver::Wait.new(timeout: 10)
  wait.until { driver.find_element(css: '#qunit-testresult .failed') }
rescue Selenium::WebDriver::Error::TimeOutError
  puts driver.page_source
  puts driver.find_element(css: 'body').text
  puts 'FAIL'
  exit 1
end

puts driver.find_element(css: 'body').text

fail_count = driver.find_element(css: '#qunit-testresult .failed').text
driver.quit # Is this necessary?
if fail_count == '0'
  puts 'PASS'
else
  puts 'FAIL'
  exit 1
end