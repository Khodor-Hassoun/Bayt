# puts "Hello World"
# puts "Second line"

set listToSort {3 6 8 7 0 1 4 2 9 5}
set stringToReverse "TCL is a Tool Command Language"
# puts $list

proc reverse {str} {
    set list [split $str " "]
    set newList {}
    for {set index [expr [llength $list] -1 ]} {$index >= 0} {set index [expr {$index - 1}]} {
        lappend newList [lindex $list $index]
    }
    return $newList


}

proc sortedList {num} {
    for {set i 0} {$i < [llength $num] } {incr i} {
        for {set j $i} {$j < [llength $num] } {incr j} {
            if {[lindex $num $j] < [lindex $num $i]} {
                set temp [lindex $num $i]
                set num [lset num $i [lindex $num $j]]
                set num [lset num $j $temp]
            }
        }
    }

    return $num

}

puts "String: $stringToReverse, is reversed to\n[reverse $stringToReverse]"
puts \n
puts "List: $listToSort, is sorted to\n[sortedList $listToSort]"