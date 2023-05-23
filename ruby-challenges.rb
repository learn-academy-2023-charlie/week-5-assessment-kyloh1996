# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def specCap(words, letter)
  filtered_words = []
  
  words.each do |word|
    if word.include?(letter)
      filtered_words << word
    end
  end
  
  return filtered_words
end

puts specCap(beverages_array, filter_letter_o).inspect
puts specCap(beverages_array, filter_letter_t).inspect

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'



us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }

# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] -> this expect is in alphabetical order
def flatten_and_sort_hash_values(hash)
    #extract values and sort
    flattened_values = hash.values.flatten
    sorted_values = flattened_values.sort
  
    return sorted_values
  end
  
  result = flatten_and_sort_hash_values(us_states)
  # inspect to create the new array 
puts result.inspect

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.
class Bike
    def initialize(model, wheels = 2)
      @model = model
      @wheels = wheels
      @current_speed = 0
    end
    
    def bike_info
      "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
  end
  
  # Test case
  my_bike = Bike.new("Trek")
  puts my_bike.bike_info
  

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.
class Bike
    attr_reader :model, :wheels, :current_speed
    
    def initialize(model, wheels = 2)
      @model = model
      @wheels = wheels
      @current_speed = 0
    end
    
    def bike_info
      return "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
    
    def pedal_faster(speed_increase)
      @current_speed += speed_increase
      return @current_speed
    end
    
    def brake(speed_decrease)
      @current_speed = [@current_speed - speed_decrease, 0].max
      return @current_speed
    end
  end

 my_bike.pedal_faster(10) 
 puts my_bike.bike_info
 my_bike.pedal_faster(18)
 puts my_bike.bike_info 
 my_bike.brake(5) 
 puts my_bike.bike_info
 my_bike.brake(25) 
 puts my_bike.bike_info
# output: 
# The Trek bike has 2 wheels and is going 0 mph.
# The Trek bike has 2 wheels and is going 10 mph.
# The Trek bike has 2 wheels and is going 28 mph.
# The Trek bike has 2 wheels and is going 23 mph.
# The Trek bike has 2 wheels and is going 0 mph.