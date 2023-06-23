
def processData(input)
    #Enter your code here

    phonebook = Hash.new
    input.each_line do |line|
        line = line.chomp
        if line.include? " "
            name, number = line.split(" ")
            phonebook[name] = number
        else
            name = line
            if phonebook.has_key?(name)
                puts "#{name}=#{phonebook[name]}"
            else
                puts "Not found"
            end
        end
    end
end

input = "3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry"
processData(input)