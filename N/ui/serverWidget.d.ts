/// <reference path="../../typings/tsd.d.ts" />

interface AddButtonOptions {
    id: string;
    label: string;
    functionName?: string;
}

interface AddCredentialFieldOptions {
    id: string;
    label: string;
    restrictToCurrentUser?: boolean;
    restrictToDomains?: string|string[];
    restrictToScriptId?: string;
    tab?: string;
}

interface AddFieldGroupOptions {
    id: string;
    label: string;
}

interface AddFieldOptions {
    id: string;
    label: string;
    type: string;
    source?: string;
    tab?: string;
}

interface AddPageLinkOptions {
    title: string;
    type: string;
    url: string;
}

interface AddResetButtonOptions {
    label: string;
}

interface AddSelectOptionOptions {
    value: string;
    text: string;
    isSelected?: boolean;
}

interface AddSublistOptions {
    id: string;
    label: string;
    tab?: string;
    type: string;
}

interface AddSubtabOptions {
    id: string;
    label: string;
    tab?: string;
}

interface ClientScriptOptions {
    script: string; // The scriptId or internal ID
}

interface CreateAssistantOptions {
    title: string;
    hideNavBar?: boolean;
}

interface IDOptions {
    id: string;
}

interface UIGetFieldOptions {
    id: string;
    radio?: string;
}

interface GetSelectOptionsOpts {
    filter?: string;
    filteroperator?: string;
}

interface GetSublistFieldIdsOptions {
    group: string;
}

interface UIGetSublistValueOptions {
    group: string;
    id: number;
    line: string;
}

interface InsertFieldOptions {
    field: string;
    nextfield: string;
}

interface InsertSublistOptions {
    sublist: string;
    nextsublist: string;
}

interface InsertSubtabOptions {
    subtab: string;
    nextsubtab: string;
}

interface SetDefaultValuesOptions {
    values: Object;
}

interface SetHelpTextOptions {
    help: string;
    showInlineForAssistant?: boolean;
}

interface SublistGetSublistValueOptions {
    id: string;
    line: number;
}

interface SublistSetSublistValueOptions {
    id: string;
    line: number;
    value: string;
}

interface SetSplashOptions {
    title: string,
    text1: string,
    text2?: string 
}

interface UpdateBreakTypeOptions {
    breakType: string;
}

interface UpdateDisplaySizeOptions {
    height: number;
    width: number;
}

interface UpdateDisplayTypeOptions {
    displayType: number;
}

interface UpdateLayoutTypeOptions {
    layoutType: string;
}

interface AssistantSubmitActions {
    BACK: string;
    CANCEL: string;
    FINISH: string;
    JUMP: string;
    NEXT: string;
}

interface FieldBreakTypes {
    NONE: string;
    STARTCOL: string;
    STARTROW: string;
}

interface FieldDisplayTypes {
    DISABLED: number;
    ENTRY: number;
    HIDDEN: number;
    INLINE: number;
    NORMAL: number;
    READONLY: number;
}

interface FieldLayoutTypes {
    ENDROW: string;
    NORMAL: string;
    MIDROW: string;
    OUTSIDE: string;
    OUTSIDEBELOW: string;
    OUTSIDEABOVE: string;
    STARTROW: string;
}

interface FieldTypeLists {
    CHECKBOX: string;
    CURRENCY: string;
    DATE: string;
    DATETIMETZ: string;
    EMAIL: string;
    FILE: string;
    FLOAT: string;
    HELP: string;
    INLINEHTML: string;
    INTEGER: string;
    IMAGE: string;
    LABEL: string;
    LONGTEXT: string;
    MULTISELECT: string;
    PASSPORT: string;
    PERCENT: string;
    PHONE: string;
    SELECT: string;
    RADIO: string;
    RICHTEXT: string;
    TEXT: string;
    TEXTAREA: string;
    TIMEOFDAY: string;
    URL: string;
}

interface FormPageLinkTypes {
    BREADCRUMB: string;
    CROSSLINK: string;
}

interface LayoutJustifications {
    CENTER: string;
    LEFT: string;
    RIGHT: string;
}

interface ListStyles {
    GRID: string;
    REPORT: string;
    PLAIN: string;
    NORMAL: string;
}

interface SublistDisplayTypes {
    HIDDEN: string;
    NORMAL: string;
}

interface SublistTypes {
    EDITOR: string;
    INLINEEDITOR: string;
    LIST: string;
    STATICLIST: string;
}

interface Assistant {
    addField(options: AddFieldOptions): UIField;
    addFieldGroup(options: AddFieldGroupOptions): UIFieldGroup;
    addStep(options: AddFieldGroupOptions): AssistantStep;
    addSublist(options: AddSublistOptions): UISublist;
    // clientScript(options: ClientScriptOptions): void;
    getField(options: IDOptions): UIField;
    getFieldGroup(options: IDOptions): UIFieldGroup;
    getFieldGroupIds(): string[];
    getFieldIds(): string; // not string[]?? may need testing.
    getLastAction(): AssistantSubmitActions;
    getLastStep(): AssistantStep;
    getNextStep(): AssistantStep;
    getStep(options: IDOptions): AssistantStep;
    getStepCount(): number;
    getSteps(): AssistantStep[];
    getSublist(options: IDOptions): UISublist;
    getSublistIds(): string[];
    hasErrorHtml(): boolean;
    isFinished(): boolean;
    sendRedirect(): void;
    setSplash(options: SetSplashOptions): void;
    clientScriptFileId: number;
    currentStep: void;
    defaultValues: string[];
    errorHtml: string; // Error message text for the current step
    finishedHtml: string; // The text to display after the assistant finishes. For example “You have completed the Small Business Setup Assistant. Take the rest of the day off”.
    hideAddToShortcutsLink: boolean;
    hideStepNumber: boolean;
    isNotOrdered: boolean;
    title: string;
}

interface AssistantStep {
    getFieldIds(): string[];
    getSublistFieldIds(options: GetSublistFieldIdsOptions): string[];
    getLineCount(options: GetSublistFieldIdsOptions): number;
    getSubmittedSublistIds(): string[];
    getSublistValue(options: UIGetSublistValueOptions): string;
    getValue(options: IDOptions): string|string[];
    helpText: string;
    id: string;
    label: string;
    stepNumber: number;
}

interface UIButton {
    isDisabled: boolean;
    isHidden: boolean;
    label: string;
}

interface UIField {
    addSelectOption(options: AddSelectOptionOptions): void;
    getSelectOptions(options: GetSelectOptionsOpts): Object[];
    setHelpText(options: SetHelpTextOptions): UIField;
    updateDisplaySize(options: UpdateDisplaySizeOptions): UIField;
    updateDisplayType(options: UpdateDisplayTypeOptions): UIField;
    updateBreakType(options: UpdateBreakTypeOptions): UIField;
    updateLayoutType(options: UpdateLayoutTypeOptions): UIField;
    alias: string;
    // breakType: string; // no longer documented as of 2016.1
    defaultValue: string;
    // displaySize: number; // no longer documented as of 2016.1
    // displayType: string;  // no longer documented as of 2016.1
    id: string;
    isMandatory: boolean;
    label: string;
    layoutType: string;
    linkText: string;
    maxLength: number;
    padding: number;
    richTextHeight: number;
    richTextWidth: number;
    type: string;
}

interface UIFieldGroup {
    isBorderHidden: boolean;
    isCollapsible: boolean;
    isCollapsed: boolean;
    isSingleColumn: boolean;
    label: string;
}

interface UIForm {
    addButton(options: AddButtonOptions): UIButton;
    addCredentialField(options: AddCredentialFieldOptions): UIField;
    addField(options: AddFieldOptions): UIField;
    addFieldGroup(options: AddFieldGroupOptions): UIFieldGroup;
    addPageLink(options: AddPageLinkOptions): void;
    addResetButton(options: AddResetButtonOptions): UIButton;
    addSublist(options: AddSublistOptions): UISublist;
    addSubmitButton(label: string): void; // Not documented. Is there some other way to do this now?
    addSubtab(options: AddSubtabOptions): UITab;
    addTab(options: AddFieldGroupOptions): UITab;
    clientScript(options: ClientScriptOptions): void;
    getButton(options: IDOptions): UIButton;
    getField(options: UIGetFieldOptions): UIField;
    getSublist(options: IDOptions): UISublist;
    getSubtab(options: IDOptions): UITab;
    getTabs(): UITab[];
    insertField(options: InsertFieldOptions): UIField;
    insertSublist(options: InsertSublistOptions): UISublist;
    insertSubtab(options: InsertSubtabOptions): UITab;
    insertTab(options: InsertSubtabOptions): UITab;
    removeButton(options: IDOptions): void;
    setDefaultValues(options: SetDefaultValuesOptions): void;
    title: string;
}

interface UISublist {
    addButton(options: AddButtonOptions): UIButton;
    addField(options: AddFieldOptions): UIField;
    addMarkAllButtons(): UIButton;
    addRefreshButton(): UIButton;
    getSublistValue(options: SublistGetSublistValueOptions): string;
    setSublistValue(options: SublistSetSublistValueOptions): string;
    displayType: string;
    helpText: string;
    label: string;
    lineCount: number;
    totallingFieldId: string;
    uniqueFieldId: string;
}

interface UITab {
    helpText: string;
    label: string;
}

interface serverWidget { // TODO: Review 2016.1 documentation, add more Enums
    Assitant: Assistant;
    AssistantStep: AssistantStep;
    Button: UIButton;
    Field: UIField;
    FieldGroup: UIFieldGroup;
    Form: UIForm;
    Sublist: UISublist;
    Tab: UITab;
    FieldBreakType: FieldBreakTypes;
    FieldDisplayType: FieldDisplayTypes;
    FieldLayoutType: FieldLayoutTypes;
    FieldType: FieldTypeLists;
    AssistantSubmitAction: AssistantSubmitActions;
    createAssistant(options: CreateAssistantOptions): Assistant;
    createForm(options: CreateAssistantOptions): UIForm;
}

declare module ui {
    var serverWidget: serverWidget;
}

declare module 'N/ui/serverWidget' {
    export = ui.serverWidget;
}
