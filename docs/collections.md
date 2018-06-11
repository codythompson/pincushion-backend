# Collections

## Users

## MaterialTypes

- name string
- description string
- attributes [{}]
- images [string]
- ancestors [ObjectId] (the 'path' from root to this node)

## MaterialInventory

- notes string
- images [string]
- quantity {}
- userId ObjectId (foreign key)
- materialTypeId ObjectId (foreign key)

copied from MaterialTypes on every insert
- materialTypeName string
- materialTypeDescription string
- materialImages [string]
- materialAncestors [ObjectId]

## PatternBrand

- name string
- description string

## Pattern

- number string
- minSize number
- maxSize number
- sizeUnits string
- envelopeFrontImages [string]
- envelopeBackImages [string]
- lineArt [string]
- yardageCharts [{heading: string, rows: [{label: string, cells: []}}]
- patternBrandId ObjectId (foreign key)

copied from PatternBrand
- patternBrandName string
- patternBrandDescription string

## PatternInventory

- notes string
- patternId ObjectId (foreign key)
- userId ObjectId (foreign key)

copied from Pattern
- patternBrandId ObjectId (foreign key)
- patternNumber string
- patternMinSize number
- patternMaxSize number
- patternSizeUnits string
- patternEnvelopeFrontImages [string]
- patternEnvelopeBackImages [string]
- patternLineArt [string]
- patternYardageCharts [{heading: string, rows: [{label: string, cells: []}}]
- patternBrandName string
- patternBrandDescription string

## Projects

- name string
- description string
- patternIds [ObjectId] (foreign keys)
- materialIds [ObjectId] (foreign keys)
- images [string]
- notes string

## Resources

- name string
- description string
- link string
- images [string]
- notes string

# TODO

- test the latest changes to the creation script
 