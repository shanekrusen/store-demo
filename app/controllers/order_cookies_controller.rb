class OrderCookiesController < ApplicationController
  def new_order
    cookies[:order] = { value: JSON.generate([]), expires: 1.hour.from_now }
    redirect_to(:back)
  end
  
  def add_to_order
    @order = JSON.parse(cookies[:order])
    @item = params[:item]
    @order << @item
    cookies[:order] = { value: JSON.generate(@order), expires: 1.hour.from_now }
    redirect_to(:back)
  end
end
