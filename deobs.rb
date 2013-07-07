File.open("palecwdupie.js") do |f|
  d = f.read
	map = {}
	chars = "0123456789ABCDEF".split("")
	chars.each_index do |i|
		map[chars[i][0]] = i
	end

	k,rest = d.split("]", 2)
	k.gsub!('"', '')
	k.gsub!(/var _.*\[/, '')
	k = k.split(',')
	
	k.each do |i|
		i.gsub!(/\\x([0-9A-F][0-9A-F])/) do |str|
			l = 16*map[str[2]]+map[str[3]]
			"" << l
		end
	end
	rest.gsub!(";", ";\n")
	rest.gsub!("{", "{\n")
	rest.gsub!(/_0x4d79\[([0-9]*)\]/) do
		'"' << k[$1.to_i] << '"'
	end

	print rest
end
