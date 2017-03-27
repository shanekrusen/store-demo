module ApplicationHelper
  def decimals(a)
    num = 0
    while(a != a.to_i)
        num += 1
        a *= 10
    end
    num   
  end
  
  def get_total
    @total = 0
    if cookies[:order].present? && JSON.parse(cookies[:order]).any?
      @order = JSON.parse(cookies[:order])
      @order.each do |item|
        @price = Item.find_by name: item
        @total += @price.price
      end
    end
    @num = 0
    while(@total != @total.to_i)
      @num += 1
      @total *= 10
    end
    if @total == 0
      
    elsif @num == 2
      @total = @total/100
    elsif @num == 1
      @total = @total/10
      @total = @total.to_s + "0"
    elsif @num == 0
      @total = @total.to_s + "0"
    end
    return @total
  end
end
