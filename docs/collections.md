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

- name string
- description string
- notes string
- patternId ObjectId (foreign key)

