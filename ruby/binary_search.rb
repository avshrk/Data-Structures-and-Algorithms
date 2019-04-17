
def binary_search(array, value)
  lower = 0
  upper = array.size - 1

  while lower < upper do
    middle = ((lower + upper) / 2).floor
    if array[middle] < value
      lower = middle
    elsif array[middle] > value
      upper = middle
    elsif array[middle] == value
      return middle
    end
  end

  return nil
end

