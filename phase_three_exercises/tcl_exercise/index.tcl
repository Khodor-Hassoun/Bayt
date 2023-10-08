# puts "Hello World"
# puts "Second line"

set list {1 2 3 4}
# puts $list

proc reverse {str} {
    set list [split $str " "]
    set newList {}
    for {set index [expr [llength $list] -1 ]} {$index >= 0} {set index [expr {$index - 1}]} {
        lappend newList [lindex $list $index]
    }
    return $newList


}

puts "List: $list is reversed to [reverse $list]"