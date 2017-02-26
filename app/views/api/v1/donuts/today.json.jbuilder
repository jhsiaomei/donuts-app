json.array! @donuts.each do |donut|
  json.brand donut.brand
  json.number donut.number
  json.name donut.name
  json.date donut.date
end