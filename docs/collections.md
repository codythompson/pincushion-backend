# Collections

## Users

- GUID

## MaterialCategories

- name string
- description string

## MaterialTypes

- name string
- description string
- attributes [{}]
- images [string]
- _materialCategoryIds [ObjectId] (foreign keys)

copied from MaterialCategories
- materialCategoryName
- materialCategoryDescription

## Materials

- name string
- description string
- attributes {} (material type attribute values)
- images [string]
- _materialTypeId ObjectId (foreign key)

copied from MaterialTypes on every insert
- materialTypeName string
- materialTypeDescription string
- materialTypeTags [string]
